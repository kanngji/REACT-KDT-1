export default function FCustomList(props) {
  return (
    <ul>
      {props.nameArray.map((el) => {
        return <li>{el}</li>;
      })}
    </ul>
  );
}
