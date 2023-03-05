export default function ProfileListItem({
  logo, text, activeTub, type, onClick,
}) {
  function handleClick() {
    onClick(type);
  }
  return (
    <li onClick={handleClick} className={`profile__list-item ${activeTub === type && 'profile__list-item_active'}`}>
      <img className="profile__list-img" src={logo} alt={text} />
      {text}
    </li>
  );
}
