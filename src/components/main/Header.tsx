import "./Header.css";
import { Link } from "react-router-dom";
import { Container, Dropdown, Navbar } from "react-bootstrap";

interface UserType {
  userType: "company" | "worker";
  logged: boolean;
  name: string;
}

const Header = ({ userType, logged, name }: UserType) => {
  const renderUserMenu = () => {
    if (logged) {
      return (
        <Dropdown align="end">
          <Dropdown.Toggle
            style={{
              background: "none",
              border: "none",
              color: "#B3B3B3",
              fontSize: "12px",
            }}
          >
            {name}님
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="text-center"
            style={{ minWidth: "7rem", fontSize: "12px" }}
          >
            {userType === "company" && (
              <>
                <Link to="/" className="header-link-style">
                  <Dropdown.Item>모집중인 공고</Dropdown.Item>
                </Link>
                <Link to="/" className="header-link-style">
                  <Dropdown.Item>마감된 공고</Dropdown.Item>
                </Link>
                <Link to="/" className="header-link-style">
                  <Dropdown.Item>기업 정보</Dropdown.Item>
                </Link>
                <Link to="/" className="header-link-style">
                  <Dropdown.Item>로그아웃</Dropdown.Item>
                </Link>
              </>
            )}
            {userType === "worker" && (
              <>
                <Link to="/" className="header-link-style">
                  <Dropdown.Item>지원 현황</Dropdown.Item>
                </Link>
                <Link to="/" className="header-link-style">
                  <Dropdown.Item>스크랩</Dropdown.Item>
                </Link>
                <Link to="/" className="header-link-style">
                  <Dropdown.Item>내 정보</Dropdown.Item>
                </Link>
                <Link to="/" className="header-link-style">
                  <Dropdown.Item>로그아웃</Dropdown.Item>
                </Link>
              </>
            )}
          </Dropdown.Menu>
        </Dropdown>
      );
    } else {
      return (
        <div style={{ fontSize: "12px" }}>
          <Link to="/" className="mx-4 header-link-style">
            로그인
          </Link>
          <Link to="/" className="header-link-style">
            회원가입
          </Link>
        </div>
      );
    }
  };

  return (
    <Navbar className="justify-content-between">
      <Container>
        <h2>
          <span style={{ color: "#F24822" }}>One</span>Q
          <span style={{ color: "#0D99FF" }}>Job</span>
        </h2>
        {renderUserMenu()}
      </Container>
    </Navbar>
  );
};

export default Header;
