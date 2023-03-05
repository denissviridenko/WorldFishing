import google from '../../images/Google.svg';
import facebook from '../../images/Facebook.svg';

export default function ThirdPartyAuth() {
  return (
    <div className="third-party-auth">
      <button className="third-party-auth__item" type="button">
        <img src={google} alt="через google +" />
      </button>

      <button className="third-party-auth__item" type="button">
        <img className="third-party-auth__item" src={facebook} alt="через facebook" />
      </button>
    </div>
  );
}
