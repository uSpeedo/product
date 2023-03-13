import React from 'react'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock'

import styles from './styles.module.css';

export default function Main() {

  const tabs = [
    {
      title: 'Go',
      content: (
        <CodeBlock className="language-go" language="go">
          {`
    package main

    import (
        "encoding/json"
        "fmt"
        "github.com/uSpeedo/usms-sdk-go/private/utils"
        "time"

        "github.com/uSpeedo/usms-sdk-go/services/usms"
        "github.com/uSpeedo/usms-sdk-go/um"
        "github.com/uSpeedo/usms-sdk-go/um/auth"
        "github.com/uSpeedo/usms-sdk-go/um/config"
        "github.com/uSpeedo/usms-sdk-go/um/log"
    )

    func main() {
        cfg := config.NewConfig()
        cfg.LogLevel = log.DebugLevel

        credential := auth.NewCredential()
        credential.AccessKeyId = "..."
        credential.AccessKeySecret = "..."

        client := usms.NewClient(&cfg, &credential)
        // send request
        req := client.NewSendBatchUSMSMessageRequest()
        req.AccountId = um.Int(0)
        req.Action = um.String("SendBatchUSMSMessage")
        req.TaskContent = []usms.SendBatchInfo{
            {
                TemplateId: "...",
                SenderId:   "",
                Target: []usms.SendBatchTarget{
                    {
                        Phone: "130xxxx1321",
                    },
                    {
                        Phone: "130xxxx1321",
                    },
                },
            },
        }
        //add header
        req.SetNonce(utils.RandStr(10))
        req.SetAccessKeyId(credential.AccessKeyId)
        req.SetSignature(credential.CreateSign(JSONMethod(req)))
        t, _ := time.ParseDuration("-2m")
        req.SetTimestamp(time.Now().Add(t).Unix())
        resp, err := client.SendBatchUSMSMessage(req)
        if err != nil {
            panic(err)
        }
        fmt.Printf("%+v", resp)
    }

    func JSONMethod(content interface{}) map[string]interface{} {
        data, _ := json.Marshal(&content)
        m := make(map[string]interface{})
        _ = json.Unmarshal(data, &m)
        return m
    }
  `
        }
        </CodeBlock>
      )
    }
  ];

  return (
    <main className={styles.main}>
      <div className={`container ${styles.container}`}>
        <h1>{'Quickly send SMS'}</h1>
        <p className={`container ${styles.text}`}>
          {'Check out the documentation, sample code, and developer tools you need to build exactly what you want, quickly. We\'ll handle the complexities of mobile operators and global regulations. Let\'s start building.'}
        </p>

        <Tabs className={`container ${styles.tabs}`}>
          {tabs.map((item, index) => {
            return (
              <TabItem value={index} key={index} label={item.title} default>
                {item.content}
              </TabItem>
            )
          })}
        </Tabs>
      </div>
    </main>
  )
}
