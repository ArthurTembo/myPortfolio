import styles from "../modules/textholder.module.css";
import TextContainer from "./TextContainer";
import ButtonsContainer from "./ButtonsContainer"; 
export default function TextHolder() {
  return (
    <div className={styles.container}>
      <div>
        <TextContainer />
      </div>
      <div>
        <ButtonsContainer />
      </div>
    </div>
  );
}
