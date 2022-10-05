import Dialog from "./Dialog";

export default function SignUpDialog() {
  return (
    <Dialog
      title={<button onClick={() => alert("welcome")}>웰컴 버튼</button>}
      message="회원가입이 필요한 서비스입니다"
    >
      <a href="#">회원 가입페이지로 이동</a>
    </Dialog>
  );
}
