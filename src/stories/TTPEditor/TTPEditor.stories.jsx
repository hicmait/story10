import { TTPEditor } from "./TTPEditor";

const authLogin = {
  token: "00882984434b82623e1831486530a29d44efffd9",
  loggedAs: "ADMIN",
  user: {
    type: "ADMIN",
    id: 8650,
    firstName: "Emmanuel",
    lastName: "Degrève",
    mainEmail: "emmanuel.degreve@degandpartners.com",
    avatarUrl:
      "https://s3.tamtam.pro/v2/storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png",
  },
};

export default {
  title: "Common/TTPEditor",
  component: TTPEditor,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "3em" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export const Default = () => (
  <TTPEditor
    auth={authLogin}
    env={"local"}
    lng={"fr"}
    initialContent={"<p>Test</p>"}
    setContent={(e) => console.log(e)}
  />
);

const DYNAMIC_FIELDS = {
  PAYMENT: [
    {
      code: "{{DOCUMENT.AMOUNT}}",
      title: { fr: "montant", nl: "bedrag ", en: "amount" },
    },
    {
      code: "{{DOCUMENT.COMMENT}}",
      title: { fr: "commentaire", nl: "commentaar", en: "comment" },
    },
    {
      code: "{{DOCUMENT.OFFICIAL_NUMBER}}",
      title: {
        fr: "numéro officiel",
        nl: "officieel nummer",
        en: "official number",
      },
    },
    {
      code: "{{DOCUMENT.LINK}}",
      title: {
        fr: "lien du document",
        nl: "document link",
        en: "document link",
      },
    },
    {
      code: "{{DOCUMENT.APP_TYPE}}",
      title: {
        fr: "type d'inscription",
        nl: "registratie type",
        en: "registration type",
      },
    },
    {
      code: "{{REMINDER.USER_NAME}}",
      title: { fr: "Nom", nl: "Naam", en: "Name" },
    },
    {
      code: "{{REMINDER.EVENT_NAME}}",
      title: {
        fr: "Nom de l'événement ",
        nl: "Evenement naam",
        en: "Event name",
      },
    },
    {
      code: "{{REMINDER.EVENT_DATE}}",
      title: {
        fr: "Date de l'événement",
        nl: "Evenement datum",
        en: "Event Date",
      },
    },
    {
      code: "{{REMINDER.LINK}}",
      title: {
        fr: "Lien de l'inscription",
        nl: "Registratielink",
        en: "Registration link",
      },
    },
    {
      code: "{{REMINDER.APP_TYPE}}",
      title: {
        fr: "Type d'inscription",
        nl: "Registratie type",
        en: "Registration type",
      },
    },
  ],
  RECIPIENT: [
    {
      code: "{{RECIPIENT.LN}}",
      title: { fr: "nom", nl: "achternaam", en: "last name" },
    },
    {
      code: "{{RECIPIENT.FN}}",
      title: { fr: "prénom", nl: "Voornaam", en: "first name" },
    },
    {
      code: "{{RECIPIENT.EMAIL}}",
      title: { fr: "email", nl: "email", en: "email" },
    },
  ],
  SURVEY: [
    {
      code: "{{SURVEY.TITLE}}",
      title: {
        fr: "titre de l'enquête",
        nl: "titel van de enquête",
        en: "survey title",
      },
    },
    {
      code: "{{SURVEY.URL}}",
      title: { fr: "url de l'enquête", nl: "survey url", en: "survey url" },
    },
  ],
  UNITED_ASSOCIATES: [
    {
      code: "{{UA.MAIN_LINK}}",
      title: { fr: "Lien principal", nl: "lien", en: "link" },
    },
    {
      code: "{{UA.CONFIRM_EMAIL_LINK}}",
      title: {
        fr: "lien de confirmation par email",
        nl: "e-mail bevestigingslink",
        en: "email confirmation link",
      },
    },
    {
      code: "{{UA.ACCEPT_INVITATION_LINK}}",
      title: {
        fr: "lien d'acceptation de l'invitation",
        nl: "uitnodiging accepteren link",
        en: "invitation accept link",
      },
    },
    {
      code: "{{UA.REJECT_INVITATION_LINK}}",
      title: {
        fr: "lien de refus de l'invitation",
        nl: "uitnodiging afwijzen link",
        en: "invitation reject link",
      },
    },
    {
      code: "{{UA.FIDUCIARY_NAME}}",
      title: {
        fr: "nom fiduciaire",
        nl: "vertrouwenspersoon",
        en: "fiduciary name",
      },
    },
  ],
  GDPR: [
    {
      code: "{{OPT_IN_URL}}",
      title: { fr: "url d'opt in", nl: "opt in url", en: "opt in url" },
    },
    {
      code: "{{OPT_OUT_URL}}",
      title: { fr: "url d'opt out", nl: "opt out url", en: "opt out url" },
    },
  ],
  RECIPIENT2: [
    {
      code: "{{RECIPIENT.LN}}",
      title: { fr: "nom", nl: "achternaam", en: "last name" },
    },
  ],
  RECIPIENT3: [
    {
      code: "{{RECIPIENT.LN}}",
      title: { fr: "nom", nl: "achternaam", en: "last name" },
    },
  ],
  RECIPIENT4: [
    {
      code: "{{RECIPIENT.LN}}",
      title: { fr: "nom", nl: "achternaam", en: "last name" },
    },
  ],
};
export const DynamicFields = () => (
  <TTPEditor
    auth={authLogin}
    env={"local"}
    lng={"fr"}
    initialContent={"<p>Test</p>"}
    setContent={(e) => console.log(e)}
    initPlugins={["DynamicFields"]}
    dynamicFields={DYNAMIC_FIELDS}
  />
);

// Type : [TEXT,SELECT, MULTI_SELECT]
const quizQuestions = [
  {
    key: "question1",
    title: "Quel type de crédit à la consommation détenez-vous ?",
    type: "TEXT",
  },
  {
    key: "question2",
    title:
      "Détenez tenez-vous actuellement, vous ou votre conjoint, un crédit à la consommation ?",
    type: "SELECT",
    choices: ["Oui", "Non"],
  },
  {
    key: "question3",
    title: "Question 3",
    type: "MULTI_SELECT",
    choices: ["Choix 1", "Choix 2", "Choix 3"],
  },
  {
    key: "question4",
    title: "Question 4",
    type: "TEXT",
  },
];
const quizBody =
  "<h2>Titre</h2><p>Text début</p><p>{{question1}}</p><p>Votre choix</p><p>{{question2}}</p> <p>Test</p><p>{{question3}}</p><p>{{question4}}</p>";
export const QuizLayout = () => (
  <TTPEditor
    auth={authLogin}
    env={"local"}
    lng={"fr"}
    initialContent={"<p>Test</p>"}
    setContent={(e) => console.log(e)}
    quizBody={quizBody}
    quizQuestions={quizQuestions}
    initPlugins={["QuizLayout"]}
  />
);

const plugins = [
  "TweetEmbed",
  "QuoteEmbed",
  "ArticleEmbed",
  "EventEmbed",
  "DynamicFields",
];
export const Plugins = () => (
  <TTPEditor
    auth={authLogin}
    env={"local"}
    lng={"fr"}
    initialContent={"<p>Test</p>"}
    setContent={(e) => console.log(e)}
    initPlugins={plugins}
  />
);
