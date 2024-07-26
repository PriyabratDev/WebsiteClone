import style from "./store.module.css";
export const Store = () => {
  return (
    <div className={style.div1}>
      <button onClick={() => (window.location.href = "https://cultsport.com/")} className={style.btn12}>
        Explore Cult Store
      </button>
    </div>
  );
};
