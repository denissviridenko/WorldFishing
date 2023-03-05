import InfoSpan from './InfoSpan';
import span1 from '../../images/span-1.svg';
import span2 from '../../images/span-2.svg';
import span3 from '../../images/span-3.svg';

export default function InfoSpanSection() {
  return (
    <section className="info-span-section">
      <InfoSpan spanLogo={span1} spanSelector="first" spanText="Более 10 лет на рынке рыболовного туризма!" />
      <InfoSpan spanLogo={span2} spanText="Гибкие условия бронирования. Индивидуальный подход!" />
      <InfoSpan spanLogo={span3} spanText="Только проверенные экспертами направления" />
    </section>
  );
}
