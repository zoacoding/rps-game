const buttons = document.querySelectorAll('button');
const displayUserChoice = document.querySelector('.you-choice');
const displayComputerChoice = document.querySelector('.computer-choice');

const rps = ['가위', '바위', '보'];

function game(userChoice, computerChoice) {
  let message;

  if (userChoice === computerChoice) {
    message = '무승부';
  } else {
    // 무승부가 아닐 경우!
    switch (userChoice + computerChoice) {
      case '가위보':
      case '보바위':
      case '바위가위':
        message = '유저 승리!';
        break;
      case '보가위':
      case '가위바위':
      case '바위보':
        message = '컴퓨터 승리!';
        break;
    }
  }

  const result = document.querySelector('.result');
  result.innerText = message;
}

function play(event) {
  const userChoice = event.target.innerText; // 유저가 선택한 값 가져오기
  displayUserChoice.innerText = userChoice; // 유저가 선택한 값을 화면에 표시하기

  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = rps[randomIndex];
  displayComputerChoice.innerText = computerChoice;

  game(userChoice, computerChoice);
}

buttons.forEach((button) => {
  // 3개의 버튼에 똑같은 이벤트 리스너를 붙여줌!
  button.addEventListener('click', play);
});
