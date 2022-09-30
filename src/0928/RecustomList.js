export default function RecustomList(props) {
  return (
    <ul>
      {props.arr.map((el) => {
        return <li>{el}</li>;
      })}
    </ul>
  );
}
