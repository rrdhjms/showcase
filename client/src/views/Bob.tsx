import React, { useState, useEffect } from 'react';
import { Crumb } from '../types/Breadcrumbs';
import Breadcrumbs from 'components/Other/Breadcrumbs';
import Route from 'types/Route';
import HeaderLg from 'components/Header/HeaderLg';
import ProjectPage from './ProjectPage';
import styles from './Bob.module.css';
import { Input, Button, Form } from 'reactstrap';
import BobMessage from 'types/BobMessage';
import { askBob } from 'api/bob';

type Props = {
  crumbs: Array<Crumb>;
  info: Route;
};

const Bob = ({ crumbs, info }: Props) => {
  const [messages, setMessages] = useState<BobMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await askBob(currentMessage);

    await setMessages((messages) => [
      ...messages,
      {
        isBob: false,
        message: currentMessage,
        timestamp: Date.now(),
      },
    ]);

    await setMessages((messages) => [
      ...messages,
      {
        isBob: true,
        message: res.data.result || '',
        timestamp: Date.now(),
      },
    ]);
    setCurrentMessage('');
  };

  useEffect(
    () =>
      setMessages([
        ...messages,
        {
          isBob: true,
          message: 'Hello',
          timestamp: Date.now(),
        },
      ]),
    []
  );

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <HeaderLg title={info.name} imagePath={info.imagePath} />
      <ProjectPage info={info} about={'Something about Bob'}>
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <i className="fas fa-robot" />
            <span>
              <h3>Bob</h3>
              <p>Active</p>
            </span>
          </div>
          <div className={styles.chatArea}>
            <div className={styles.emptyChat}>Say hi to Bob &#128075;</div>
            {messages.map(({ message, timestamp, isBob }) => {
              return (
                <Message
                  message={message}
                  timestamp={timestamp}
                  isBob={isBob}
                />
              );
            })}
          </div>
          <Form onSubmit={(e) => handleClick(e)} className={styles.input}>
            <Input
              type="text"
              value={currentMessage}
              placeholder="Type a message..."
              onChange={(e) => setCurrentMessage(e.target.value)}
            />
            <Button type="submit">
              <i className="far fa-paper-plane" />
            </Button>
          </Form>
        </div>
      </ProjectPage>
    </>
  );
};

export default Bob;

type MessageProps = {
  message: string;
  timestamp: number;
  isBob: boolean;
};

const Message = ({ message, timestamp, isBob }: MessageProps) => {
  if (isBob) {
    return (
      <div className={`${styles.messageRow} ${styles.bobMessage}`}>
        <div className={`${styles.messageContent}`}>
          <i className="fas fa-robot" />
          <div className={styles.messageText}>{message}</div>
          <div className={styles.messageTime}>{Date.now()}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.messageRow} ${styles.youMessage}`}>
      <div className={`${styles.messageContent}`}>
        <div className={styles.messageText}>{message}</div>
        <div className={styles.messageTime}>{Date.now()}</div>
      </div>
    </div>
  );
};
