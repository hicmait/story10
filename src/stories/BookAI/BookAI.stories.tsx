import type { Meta, StoryObj } from "@storybook/react-vite";
import { BookAIList } from "./BookAIList";

const user = {
  uid: "70FF3651-066C-4F9E-B1F2-0DA285DB5B0F",
  enabled: true,
  firstName: "Bruno",
  lastName: "de lescaille",
  language: "fr",
  type: "ADMIN",
  status: "CREATED",
  institute: "",
  numeroAgreation: "",
  agreationType: "",
  agreationTitle: "",
  agreationParam: "",
  itaaStatus: "",
  agreation: [],
  gender: "MALE",
  title: "",
  salutation: "",
  function: "BigBoss",
  isSecure: true,
  hasAgreedTerms: true,
  isUaAdmin: true,
  uaStatus: "VALIDATED",
  acceptCookies: true,
  id: 8863,
  mainEmail: "bruno.delescaille@gmail.com",
  mainPhone: "+32487324449",
};

const meta: Meta<typeof BookAIList> = {
  title: "Event/BookAIList",
  component: BookAIList,
  tags: ["autodocs"],
  argTypes: {
    language: {
      control: "select",
      options: ["fr", "nl", "en"],
    },
    organization: {
      control: "number",
    },
    token: {
      control: "text",
    },
    env: {
      control: "select",
      options: ["local", "staging", "production"],
    },
    viewType: {
      control: "select",
      options: ["slider", "list"],
    },
    showDetailsModal: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    language: "fr",
    organization: 4442,
    token: "89d071e4082a2ddb017c5f647c91d7da803b6f99",
    user: user,
    showFiduciareModal: false,
    showDetailsModal: false,
    env: "staging",
  },
};

export const ListingView = () => (
  <div className="grid-container">
    <BookAIList
      language="fr"
      organization={null}
      token="89d071e4082a2ddb017c5f647c91d7da803b6f99"
      user={user}
      showFiduciareModal={false}
      showDetailsModal={false}
      env="staging"
      viewType="list"
    />
  </div>
);
