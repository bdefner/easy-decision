import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { colors } from '../styles/styleConstants';

const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f4f4f4;
`;

function Anchor({ children, ...restProps }) {
  // using a instead of Link since we want to force a full refresh
  return <a {...restProps}>{children}</a>;
}

export default function Header(props) {
  return (
    <div className="headerWrap">
      <Link href="/" id="logoWrap">
        <Image
          src="/../public/assets/icons/logo-icon.png"
          width="30"
          height="42"
        />
        <p>
          Easy <span>Decision</span>
        </p>
      </Link>
      <div></div>
      <nav>
        <Link href="/" className="mainButton button1">
          quick start
        </Link>
        <Link href="/" className="mainButton button1">
          about{' '}
        </Link>
        {props.user && <div>Hi, {props.user.username}</div>}
        {props.user ? (
          <>
            <Anchor href="/logout" className="mainButton button2">
              logout
            </Anchor>
            <Link href="/profile" className="mainButton button2">
              profile
            </Link>
          </>
        ) : (
          <Link href="/login" className="mainButton button2">
            login | signup
          </Link>
        )}
      </nav>
    </div>
  );
}
