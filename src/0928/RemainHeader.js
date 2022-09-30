export default function RemainHeader(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{props.hobby}</h1>
      <a href={props.href}>네이버로 간다잉</a>
    </div>
  );
}
