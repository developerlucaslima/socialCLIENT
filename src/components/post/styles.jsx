import styled from "styled-components";

export const Container = styled.div`
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  border-radius: 20px;
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.textColor};

  .post {
    padding: 20px;

    > .user {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .userInfo {
        display: flex;
        gap: 20px;

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .details {
          display: flex;
          flex-direction: column;

          .name {
            font-weight: 500;
          }

          .date {
            font-size: 12px;
          }
        }
      }
    }

    > .content {
      margin: 20px 0px;

      img {
        width: 100%;
        max-height: 500px;
        object-fit: cover;
        margin-top: 20px;
      }
    }

    > .info {
      display: flex;
      align-items: center;
      gap: 20px;

      .item {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        font-size: 14px;
      }
    }
  }




`