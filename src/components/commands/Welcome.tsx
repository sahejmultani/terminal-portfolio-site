import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";



const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`   
▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▌
▐                                                                        ▌
▐                                                                        ▌
▐                                                                        ▌
▐                                                                        ▌
▐      _______   __ ______   __  __  _____  ____ _________   _  ______   ▌
▐     / __/ _ | / // / __/_ / / /  |/  / / / / //_  __/ _ | / |/ /  _/   ▌
▐      _\ \/ __ |/ _  / _// // / / /|_/ / /_/ / /__/ / / __ |/    // /     ▌
▐     /___/_/ |_/_//_/___/\___/ /_/  /_/\____/____/_/ /_/ |_/_/|_/___/     ▌
▐                                                                        ▌
▐                                                                        ▌
▐                                                                        ▌
▐                                                                        ▌
▐▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▌
                                                                     

          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▌
▐                                                                        ▌
▐                                                                        ▌
▐                                                                        ▌
▐                                                                        ▌
▐      _______   __ ______   __  __  _____  ____ _________   _  ______   ▌
▐     / __/ _ | / // / __/_ / / /  |/  / / / / //_  __/ _ | / |/ /  _/   ▌
▐      _\ \/ __ |/ _  / _// // / / /|_/ / /_/ / /__/ / / __ |/    // /     ▌
▐     /___/_/ |_/_//_/___/\___/ /_/  /_/\____/____/_/ /_/ |_/_/|_/___/     ▌
▐                                                                        ▌
▐                                                                        ▌
▐                                                                        ▌
▐                                                                        ▌
▐▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▌
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/sahejmultani/terminal-portfolio-site/tree/main">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        
      </div>
    </HeroContainer>
  );
};

export default Welcome;
