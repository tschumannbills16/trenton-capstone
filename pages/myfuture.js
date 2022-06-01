import Background from "../components/Background";
import HeaderBar from "../components/HeaderBar";
import styles from "../styles/Home.module.css";
export default function MyFuture() {
  return (
    <>
      <HeaderBar headerText="My Future" linkTo="/" />

      <div>
        <main>
          <div className={styles.goalone}>
            <h3>Short Term Goals</h3>
          </div>
          <div className={styles.textone}>
            After highschool I want to travel, and see new parts of the world,
            New Zealand has caught my eye, and has always been a goal
            destination of mine, not only is it a beautiful place to travel to,
            but they also have early skiing. I would probably go in september
            and travel with my friends and with the whistler freestyle ski team.
            I would like to work on my career path at the same time while
            traveling, I&#39;m moving towards taking online coding courses and
            pursue website development. Another goal of mine is to communicate
            and create a strong network with people across the world, so
            opportunities can show up for me in the future.
          </div>
          <div className={styles.goaltwo}>
            <h3>Long Term Goals</h3>
          </div>

          <div className={styles.texttwo}>
            I don&#39;t want to get to fancy with my lifestyle, I want to be
            able to afford anything without going into bad debt, I want to save
            myself from buying expensive and unnecessary stuff, so I can work
            that towards investments and savings instead. Researching and
            learning about different investments, have been a great interest to
            me, I plan to read more books and learn new skills so I can use It
            for my job or my personal life. I want a career that will allow me
            to work at home or at a office, so I can do tasks in different
            environments and have an fresh mind. As an active person I want to
            start eating healthier foods, so I can be motivated to power through
            the day. Eating junk food hasn&#39;t been a issue for me now but it
            will effect me. later in my adulthood when i&#39;m not as strong.
          </div>
        </main>
      </div>
    </>
  );
}
