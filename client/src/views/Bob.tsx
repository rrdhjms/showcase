import React, { useState, useEffect, useRef } from 'react';
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
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(document.createElement('div'));

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await setIsTyping(true);

    await setMessages((messages) => [
      ...messages,
      {
        isBob: false,
        message: currentMessage,
        timestamp: new Date().getTime(),
      },
    ]);

    const res = await askBob(currentMessage);

    setCurrentMessage('');

    await setMessages((messages) => [
      ...messages,
      {
        isBob: true,
        message: res.data.result || '',
        timestamp: new Date().getTime(),
      },
    ]);

    await setIsTyping(false);
  };

  useEffect(
    () =>
      setMessages([
        ...messages,
        {
          isBob: true,
          message: 'Hello ',
          timestamp: new Date().getTime(),
        },
      ]),
    []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <HeaderLg title={info.name} imagePath={info.imagePath} />
      <ProjectPage info={info} about={'Something about Bob'}>
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <img
              src={require('assets/images/bob/bob.svg')}
              alt="Bob profile pic"
            />
            <span>
              <h3>Bob</h3>
              <p>Active</p>
            </span>
          </div>
          <div className={styles.chatArea}>
            {messages.map(({ message, timestamp, isBob }) => {
              return (
                <Message
                  message={message}
                  timestamp={timestamp}
                  isBob={isBob}
                />
              );
            })}
            <div ref={messagesEndRef} />
          </div>
          {isTyping ? <Typing /> : <></>}
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
          <img
            src={require('assets/images/bob/bob.svg')}
            alt="Bob profile pic"
          />
          <div className={styles.messageText}>{message}</div>
          <div className={styles.messageTime}>
            {new Date(timestamp).toLocaleTimeString()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.messageRow} ${styles.youMessage}`}>
      <div className={`${styles.messageContent}`}>
        <div className={styles.messageText}>{message}</div>
        <div className={styles.messageTime}>
          {new Date(timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

const Typing = () => {
  return (
    <div className={styles.typingIndicatorRow}>
      <div className={styles.typingIndicator}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
