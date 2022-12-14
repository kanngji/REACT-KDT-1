// export default function MainHeader(props) {
//   const { text, name, href } = props;
//   return (
//     <div>
//       <h1>{name}님 반갑습니다</h1>
//       {/* <h1>{name}</h1> */}
//       <a href={href}>{text}</a>
//     </div>
//   );
// }

// 클래스형 컴포넌트
import { Component } from "react";

class MainHeader extends Component {
  render() {
    const { text, name, href } = this.props;
    return (
      <div>
        <h1>{name}님 반갑습니다</h1>
        <a href={href}>{text}</a>
      </div>
    );
  }
}

export default MainHeader;
