import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  
  .container {
    position: relative;
    margin: 2% auto 0 auto;
    width: 880px;
  }
  .pr {
    position: relative;
  }
  .pa {
    position: absolute;
  }
  .ftl {
    float: left;
  }
  .pad-lr-10 {
    padding: 0 10px;
  }
  div {
    transition: ease 0.2s;
  }
  .hover {
    &:hover {
      transform: scale(1.1, 1.1);
      cursor: pointer;
    }
  }
  .not-ready {
    &:hover {
      cursor: pointer;
      opacity: 0.6;
      transform: none;
    }
  }

  .macbook {
    left: 285px;
    top: 75px;

    .screen {
      height: 150px;
      width: 250px;
      background-color: #3c5996;
      border: 10px solid #151822;
      border-radius: 5px;
    }
    .screen .user_pic {
      margin: 20px auto 15px auto;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      background-color: #b1bdd5;
    }
    .screen .password {
      background-color: #fff;
      height: 15px;
      width: 100px;
      border-radius: 20px;
      margin: 0 auto;
    }
    .screen .icons {
      margin: 27px auto 0px auto;
      width: 75px;
    }
    .screen .icons .icon {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background-color: #344c7f;
      float: left;
      margin: 0 5px;
    }

    .base {
      height: 185px;
      width: 270px;
      background-color: #e8e8eb;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;
      border-bottom: 8px solid #a6856e;
    }
    .base .connector {
      background-color: #151822;
      height: 8px;
      width: 170px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      margin: 0 auto;
    }
    .base .keypad {
      background-color: #c2cbde;
      height: 85px;
      width: 250px;
      margin: 10px auto;
      border-radius: 5px;
      padding: 3px;
    }
    .base .keypad .key {
      height: 17px;
      border-radius: 4px;
      background-color: #151822;
      margin: 2px;
      box-shadow: 0px 2px 1px #6f7584;
    }
    .base .keypad .key1 {
      width: 18px;
    }
    .base .keypad .key2 {
      width: 32px;
    }
    .base .keypad .key3 {
      width: 90px;
    }
    .base .touchpad {
      background-color: #c2cbde;
      height: 59px;
      width: 100px;
      border-radius: 5px;
      margin: -5px auto 5px auto;
    }
    .base .shadow {
      width: 100%;
      height: 6px;
      background-color: #c2cbde;
      bottom: 0px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  .mouse {
    height: 96px;
    width: 60px;
    background-color: #fff;
    left: 580px;
    top: 375px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-bottom: 5px solid #a6856e;
  }
  .mouse .scroller {
    background-color: #c2cbde;
    left: 28px;
    width: 3px;
    border-radius: 10px;
    height: 15px;
    top: 16px;
  }

  .phone {
    background-color: #20232c;
    height: 180px;
    width: 90px;
    border-radius: 10px;
    border-bottom: 5px solid #a6856e;
    left: 680px;
    top: 300px;
  }
  .phone .speaker {
    background-color: #ededf0;
    height: 3px;
    width: 15px;
    border-radius: 5px;
    margin: 8px auto;
  }
  .phone .screen {
    background-color: #262e41;
    width: 80%;
    margin: 0 auto;
    height: 135px;
  }
  .phone .screen .screen_data {
    background-color: #3c5997;
    width: 100%;
    height: 7px;
  }
  .phone .button {
    height: 15px;
    width: 15px;
    background-color: #ededf0;
    border-radius: 50%;
    margin: 6px auto;
  }
  .phone .volume_rockers {
    background-color: #20232c;
    height: 24px;
    width: 5px;
    top: 25px;
    left: -2px;
    border-radius: 10px;
  }

  .notes {
    height: 130px;
    width: 120px;
    background-color: #efd171;
    border-bottom: 5px solid #a9876e;
    left: 700px;
    top: 110px;
  }
  .notes .note {
    height: 95%;
    width: 100%;
    background-color: #ffe882;
  }
  .notes .note:after {
    content: '';
    border-left: 10px solid #fff1b4;
    border-top: 10px solid #fff1b4;
    border-right: 10px solid #efd171;
    border-bottom: 10px solid #efd171;
    position: absolute;
    right: 0px;
    bottom: 0px;
  }

  .pen {
    background-color: #fff;
    width: 15px;
    height: 120px;
    left: 600px;
    top: 230px;
  }
  .pen .pen-nip {
    border-bottom: 22px solid #3c5996;
    border-left: 8px solid transparent;
    border-right: 7px solid transparent;
    width: 0;
    height: 0;
    margin-top: -22px;
  }
  .pen .pen-nip .pen-tip {
    background-color: #fff;
    height: 2px;
    width: 32%;
    top: -16px;
    position: absolute;
    left: 5.5px;
    border-radius: 7px;
  }
  .pen .pen-bottom {
    bottom: 0px;
    background-color: #3c5996;
    width: 100%;
    height: 4px;
    border-bottom: 3px solid #a9876e;
  }

  .handwatch {
    left: 620px;
    top: 0px;
    height: 200px;
    width: 150px;
  }
  .handwatch .belt {
    background-color: #151822;
    height: 180px;
    width: 50px;
    border-radius: 10px;
    border-bottom: 5px solid #a6856e;
  }
  .handwatch .dial {
    background-color: #fff;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 5px solid #8f8a8f;
    top: 52px;
    left: -10px;
  }
  .sun-hand {
    height: 8px;
    width: 8px;
    background-color: #181b25;
    border-radius: 50%;
    top: 24px;
    left: 26px;
    z-index: 2;
  }
  .handwatch .dial .hand1 {
    width: 2px;
    height: 23px;
    background-color: #a5a9b2;
    left: 29px;
    top: 5px;
  }
  .handwatch .dial .hand2 {
    width: 2px;
    height: 18px;
    background-color: #a5a9b2;
    left: 33px;
    top: 13px;
    transform: rotate(40deg);
  }
  .handwatch .dial .button1 {
    height: 4px;
    width: 4px;
    background-color: #63636c;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    right: -4px;
    top: 10px;
    transform: rotate(-34deg);
  }
  .handwatch .dial .button2 {
    height: 4px;
    width: 4px;
    background-color: #63636c;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    right: -8px;
    top: 20px;
    transform: rotate(-7deg);
  }

  .passbook {
    background-color: #26385a;
    height: 170px;
    width: 140px;
    top: 15px;
    left: 0px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom: 5px solid #a6856e;
  }
  .passbook .symbol {
    border: 2px solid #ffdaa0;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 30px auto;
  }
  .passbook .symbol .h_line {
    width: 100%;
    top: 50%;
    border-top: 2px solid #ffdaa0;
  }
  .passbook .symbol .v_line {
    height: 100%;
    left: 50%;
    border-right: 2px solid #ffdaa0;
  }
  .passbook .symbol .inner_circle {
    height: 100%;
    width: 50%;
    border-radius: 50%;
    border: 2px solid #ffdaa0;
    left: 25%;
    top: -2px;
  }
  .passbook .details1 {
    height: 2px;
    width: 10%;
    background-color: #f9fafb;
    margin: 15px auto;
  }
  .passbook .details2 {
    height: 4px;
    width: 30%;
    border-radius: 5px;
    background-color: #ffdaa0;
    margin: 10px auto;
  }
  .passbook .details3 {
    height: 4px;
    width: 40%;
    border-radius: 5px;
    background-color: #f9fafb;
    margin: 10px auto;
  }

  .diary {
    height: 190px;
    width: 120px;
    top: 410px;
    left: 40px;
    border-bottom: 5px solid #a6856e;
  }
  .diary .main {
    border: 5px solid #151822;
    border-top: none;
    background-color: #fff;
    height: 100%;
    width: 100%;
    border-bottom-right-radius: 15px;
  }
  .diary .main .cover {
    background-color: #151822;
    width: 115%;
    height: 95%;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
  }
  .diary .main .cover .less {
    background-color: #3c5996;
    width: 7px;
    height: 95%;
    right: 10px;
  }

  .pencil {
    background-color: #ffe882;
    width: 15px;
    height: 120px;
    left: 230px;
    top: 200px;
  }
  .pencil .pencil-nip {
    border-bottom: 22px solid #f3c6a9;
    border-left: 8px solid transparent;
    border-right: 7px solid transparent;
    width: 0;
    height: 0;
    margin-top: -22px;
  }
  .pencil .pencil-nip .pencil-tip {
    border-bottom: 8px solid #151822;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    height: 0px;
    width: 0px;
    top: -22px;
    position: absolute;
    left: 5px;
  }
  .pencil .pencil-bottom {
    bottom: 0px;
    background-color: #ff859f;
    width: 100%;
    height: 15px;
    border-bottom: 5px solid #a9876e;
  }

  .lock {
    top: 380px;
    left: 200px;
    border-bottom: 5px solid #a9876e;
    border-radius: 32px;
  }
  .lock .locker {
    background-color: #272a34;
    border: 5px solid #f8f8f9;
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
  .lock .locker .key_hole {
    background-color: #bbbcbf;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    top: 20px;
    left: 20px;
  }
  .lock .locker .key_hole:after {
    position: absolute;
    content: '';
    background-color: #bbbcbf;
    height: 10px;
    width: 3px;
    border-radius: 5px;
    top: 7px;
    left: 3px;
  }
  .lock .handle {
    height: 30px;
    width: 30px;
    border: 5px solid #e8e8eb;
    border-bottom: 0;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    margin-left: 10px;
    margin-bottom: -7px;
  }

  .mug {
    left: 65px;
    top: 220px;
    background-color: #ffffff;
    height: 160px;
    width: 100px;
    border-radius: 50px;
    border-bottom: 15px solid #a9876e;
  }
  .mug .mug_head {
    height: 85px;
    width: 85px;
    background-color: #c2cbde;
    margin-left: 7px;
    margin-top: 7px;
    border-radius: 50%;
    z-index: 2;
  }
  .mug .mug_head .coffee {
    background-color: #49362e;
    height: 72px;
    width: 82px;
    border-radius: 50%;
    left: 2px;
    bottom: 0px;
    z-index: 1;
  }
  .mug .mug_head .ear {
    height: 45px;
    width: 50px;
    right: -37px;
    top: 39px;
    border: 8px solid #fff;
    border-radius: 50%;
  }
`
