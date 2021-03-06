import * as React from 'react';
import styled from 'styled-components';

const emojis: { [label: string]: string } = {
  love: 'โค๏ธ',
  beer: '๐บ',
  tacos: '๐ฎ',
  coffee: 'โ',
  sushi: '๐ฃ',
  pizza: '๐',
};

export interface DoczFooterProps {
  hideAuthor?: boolean;
  authorName: string;
  authorUrl: string;
  hideEmoji?: boolean;
  hideHolidays?: boolean;
  hidePoweredBy?: boolean;
  poweredByName?: string;
  poweredByUrl?: string;
}

export function DoczFooter(props: DoczFooterProps): JSX.Element {
  const emojiLabels: string[] = Object.keys(emojis);
  const emojiLabel: string = emojiLabels[Math.floor(Math.random() * emojiLabels.length)];
  const emoji: string = emojis[emojiLabel];

  // Holiday div just for fun :)
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  let holidayDiv = <></>;
  if (month === 1 && day === 1) {
    holidayDiv = <div className="holiday">๐ Happy New Year! ๐พ</div>;
  } else if (month === 2 && day === 2) {
    holidayDiv = <div className="holiday">Happy Groundhog Day! ๐ฟ๏ธ๐ณ</div>;
  } else if (month === 2 && day === 14) {
    holidayDiv = <div className="holiday">๐ Happy Valentine&apos;s Day! ๐</div>;
  } else if (month === 3 && day === 14) {
    holidayDiv = <div className="holiday">๐ฐ Happy Pie Day! ๐ฅง</div>;
  } else if (month === 3 && day === 17) {
    holidayDiv = <div className="holiday">โ๏ธ Happy St. Patrick&apos;s Day! ๐ป</div>;
  } else if (month === 4 && day === 22) {
    holidayDiv = <div className="holiday">๐ Happy Earth Day! ๐ฑ</div>;
  } else if (month === 5 && day === 5) {
    holidayDiv = <div className="holiday">๐ Happy Cinco de Mayo! ๐น</div>;
  } else if (month === 7 && day === 4) {
    holidayDiv = <div className="holiday">๐ Happy Independence Day! ๐งจ</div>;
  } else if (month === 9 && day === 19) {
    holidayDiv = <div className="holiday">๐ดโโ ๏ธ Happy International Talk Like A Pirate Day! ๐ฆ</div>;
  } else if (month === 10 && day === 31) {
    holidayDiv = <div className="holiday">๐ป Happy Halloween! ๐</div>;
  } else if (month === 11 && day >= 22 && day <= 28) {
    holidayDiv = <div className="holiday">๐ฅง Happy Thanksgiving! ๐ฆ</div>;
  } else if (month === 12 && day >= 21 && day <= 30) {
    holidayDiv = <div className="holiday">๐ Happy Holidays! โ</div>;
  } else if (month === 12 && day === 31) {
    holidayDiv = <div className="holiday">๐ฅณ Happy New Year&apos;s Eve! ๐</div>;
  }

  return (
    <Styled>
      <div className="footer-container">
        <div>
          {!props.hideAuthor && (
            <>
              Created{' '}
              {!props.hideEmoji && (
                <>
                  with{' '}
                  <span role="img" aria-label={emojiLabel}>
                    {emoji}
                  </span>{' '}
                </>
              )}
              by{' '}
              <a href={props.authorUrl} className="author">
                {props.authorName}
              </a>
            </>
          )}
        </div>
        {!props.hideHolidays && holidayDiv}
        <div>
          {!props.hidePoweredBy && (
            <>
              Powered by{' '}
              <a href={props.poweredByUrl} target="_blank" rel="noopener noreferrer">
                {props.poweredByName}
              </a>
            </>
          )}
        </div>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  a,
  a:visited {
    color: #0b5fff;
    text-decoration: none;
    &.author {
      font-weight: bold;
    }
  }

  a:hover {
    text-decoration: underline;
  }

  .footer-container {
    margin-top: 40px;
    padding-top: 15px;
    font-size: 80%;
    border-top: solid 2px #67788a;
    display: flex;
    justify-content: space-between;
  }

  .holiday {
    font-weight: bold;
    font-size: 120%;
  }
`;
