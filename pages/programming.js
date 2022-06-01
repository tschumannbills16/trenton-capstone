import styles from "../styles/Home.module.css";
import HeaderBar from "../components/HeaderBar";

export default function Programming() {
  return (
    <div className={styles.pageTwoContainer}>
      <HeaderBar headerText="Programming " linkTo="/" />

      <main className={styles.p2main}>
        <h1 className={styles.title}>
          Programming&#47;coding is one of the things I am interested in lately,
          it also ties in really well with graphic design, which also piques my
          interest. The cool thing about programming is there are many languages
          which can be used to achieve a desired result. I really like using
          java script because it provides complete control over how a website
          will function. In fact I used java script to build this website. Fun
          Fact: most popular websites like Netflix and Microsopft use
          javascript. There are also many pre-formatted website builders like
          Wix which can be used by non programmers to build fast and easy
          websites, but they also have limited functionality and freedom to
          format. Personally I prefer to code my own website, the possibilities
          are endless and its quite fun to mess around with the code&#46;
          Another reason&#44; I like coding is I get to spend quality time and
          connect with my older brother Turner who also likes to code.
        </h1>
        <h1></h1>
      </main>
    </div>
  );
}
