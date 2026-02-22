import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <Icon name="ArrowLeft" size={16} />
          На главную
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-2">
          Политика конфиденциальности
        </h1>
        <p className="text-muted-foreground mb-10">Последнее обновление: 22 февраля 2026 г.</p>

        <div className="prose prose-slate max-w-none space-y-8 text-foreground">

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Общие положения</h2>
            <p className="text-muted-foreground leading-relaxed">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных
              пользователей сайта ОкнаСервис (далее — «Оператор»). Используя сайт, вы соглашаетесь с условиями
              настоящей Политики. Если вы не согласны с условиями, пожалуйста, прекратите использование сайта.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Какие данные мы собираем</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              При заполнении форм на сайте мы можем собирать следующие персональные данные:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Имя и фамилия</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Описание проблемы или запроса</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Цели обработки данных</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Собранные персональные данные используются исключительно в следующих целях:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Обработка заявок и обратная связь с клиентами</li>
              <li>Предоставление запрошенных услуг</li>
              <li>Улучшение качества обслуживания</li>
              <li>Информирование об актуальных предложениях (только с согласия пользователя)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Хранение и защита данных</h2>
            <p className="text-muted-foreground leading-relaxed">
              Оператор принимает все необходимые организационные и технические меры для защиты персональных данных
              от неправомерного доступа, изменения, раскрытия или уничтожения. Доступ к персональным данным
              имеют только уполномоченные сотрудники, связанные обязательствами о конфиденциальности.
              Данные хранятся не дольше, чем это необходимо для достижения целей их обработки.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Передача данных третьим лицам</h2>
            <p className="text-muted-foreground leading-relaxed">
              Оператор не передаёт персональные данные пользователей третьим лицам без их согласия,
              за исключением случаев, предусмотренных действующим законодательством Российской Федерации.
              Обезличенные данные могут передаваться партнёрам в аналитических целях.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Файлы cookie</h2>
            <p className="text-muted-foreground leading-relaxed">
              Сайт использует файлы cookie для корректной работы и улучшения пользовательского опыта.
              Cookie не содержат персональных данных и используются исключительно в технических целях.
              Вы можете отключить использование cookie в настройках вашего браузера, однако это может
              повлиять на работу отдельных функций сайта.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Права пользователей</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              В соответствии с Федеральным законом № 152-ФЗ «О персональных данных» вы имеете право:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Получить информацию об обработке ваших персональных данных</li>
              <li>Потребовать уточнения, блокирования или уничтожения ваших данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия Оператора в уполномоченных органах</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Изменения политики</h2>
            <p className="text-muted-foreground leading-relaxed">
              Оператор оставляет за собой право вносить изменения в настоящую Политику конфиденциальности.
              Актуальная версия всегда доступна на данной странице. Продолжение использования сайта после
              внесения изменений означает согласие с обновлённой Политикой.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Контактная информация</h2>
            <p className="text-muted-foreground leading-relaxed">
              По вопросам, связанным с обработкой персональных данных, вы можете связаться с нами
              по телефону: <a href="tel:+78005553535" className="text-primary hover:underline">+7 (800) 555-35-35</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
