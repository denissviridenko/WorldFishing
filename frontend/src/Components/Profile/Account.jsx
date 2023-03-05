import AccountForm from '../Forms/AccountForm/AccountForm';

export default function Account({ onProfileChange }) {
  return (
    <div className="account">
      <h2 className="account__title">Аккаунт</h2>
      <AccountForm onProfileChange={onProfileChange} />
    </div>
  );
}
