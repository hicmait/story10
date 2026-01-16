import { ModalConfirm } from "./ModalConfirm";

export default {
  title: "Common/ModalConfirm",
  component: ModalConfirm,
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

export const Delete = () => (
  <ModalConfirm
    type={"delete"}
    isOpen={true}
    onCancel={() => console.log("cancel")}
    onConfirm={() => console.log("handleDeleteTree")}
    inProcess={false}
    actionFailed={false}
    title={"Confirmation de suppression"}
    text={"Êtes-vous sûr de bien vouloir supprimer cet élément ?"}
    labelNo={"No"}
    labelYes={"Yes"}
    labelError={"Error"}
  />
);

export const Publish = () => (
  <ModalConfirm
    type="publish"
    isOpen={true}
    onCancel={() => console.log("cancel")}
    onConfirm={() => console.log("handleOnConfirm")}
    inProcess={false}
    actionFailed={false}
    title="Confirmation de publication"
    text="Voulez-vous vraiment publié cet article dans Blog ? "
    labelNo="No"
    labelYes="Yes"
    labelError="Error"
  />
);

export const Send = () => (
  <ModalConfirm
    type="send"
    isOpen={true}
    onCancel={() => console.log("cancel")}
    onConfirm={() => console.log("handleDeleteTree")}
    inProcess={false}
    actionFailed={false}
    title="Confirmation de l’envoie"
    text="Voulez-vous vraiment envoyer cet article ?"
    labelNo="No"
    labelYes="Yes"
    labelError="Error"
  />
);

export const Duplicate = () => (
  <ModalConfirm
    type="duplicate"
    isOpen={true}
    onCancel={() => console.log("cancel")}
    onConfirm={() => console.log("handleOnConfirm")}
    inProcess={false}
    actionFailed={false}
    title="Confirmation de duplication"
    text="Voulez-vous vraiment dupliqué ce slide ? "
    labelNo="Non"
    labelYes="Oui, Dupliqué"
    labelError="Error"
  />
);

export const Return = () => (
  <ModalConfirm
    type="return"
    isOpen={true}
    onCancel={() => console.log("cancel")}
    onConfirm={() => console.log("handleOnConfirm")}
    inProcess={false}
    actionFailed={false}
    title="Voulez-vous quitter?"
    text="Toute modification sera annulée. "
    labelNo="Annuler"
    labelYes="Quitter"
    labelError="Error"
  />
);

export const Share = () => (
  <ModalConfirm
    type="share"
    isOpen={true}
    isChecked={true}
    onCancel={() => console.log("cancel")}
    onConfirm={() => console.log("handleOnConfirm")}
    onSwitch={() => console.log("handleOnSwitch")}
    inProcess={false}
    actionFailed={false}
    title="Confirmation de partage"
    text="Voulez-vous vraiment partager ce slide ?"
    secondText="Modèle modifiable"
    labelNo="No"
    labelYes="Yes"
    labelError="Error"
  />
);

export const Add = () => (
  <ModalConfirm
    type="add"
    isOpen={true}
    onCancel={() => console.log("cancel")}
    onConfirm={() => console.log("handleOnConfirm")}
    inProcess={false}
    actionFailed={false}
    title="Confirmation d'ajout"
    text="Voulez-vous vraiment ajouter ce slide ? "
    labelNo="No"
    labelYes="Yes"
    labelError="Error"
  />
);

export const Privatize = () => (
  <ModalConfirm
    type="privatize"
    isOpen={true}
    onCancel={() => console.log("cancel")}
    onConfirm={() => console.log("handleOnConfirm")}
    inProcess={false}
    actionFailed={false}
    title="Visibilité Slide"
    text="Voulez-vous vraiment rendre ce slide privé ? "
    labelNo="No"
    labelYes="Yes"
    labelError="Error"
  />
);

export const Logout = () => (
  <ModalConfirm
    type="logout"
    isOpen={true}
    onCancel={() => console.log("cancel")}
    onConfirm={() => console.log("handleOnConfirm")}
    inProcess={false}
    actionFailed={false}
    title="Connexion requise"
    text="Pour accéder à votre profil, vous devez vous connecter. Voulez-vous continuer ?"
    labelNo="Annuler"
    labelYes="S'identifier"
    labelError="Error"
  />
);
