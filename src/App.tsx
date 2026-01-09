import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// @ts-ignore
// import { UaButton, Article } from "../dist/main";
// import "../dist/main.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UaButton
        primary
        label="Test"
        size="large"
        onClick={() => alert("click")}
      /> */}
      {/* <Article
        article={{
          id: 29652,
          title: "\u200bVenezuela: et oui! L\u2019ann\u00e9e 2026 commence mal",
          language: "fr",
          isPrivate: false,
          isExternal: false,
          externalUrl: "",
          csScope: ["PUBLIC"],
          readTime: 2,
          relatedArticles: {
            nl: {
              id: 29653,
              url: "venezuela-en-ja-het-jaar-2026-begint-slecht",
            },
          },
          relevance: 5,
          featured: 0,
          fffLibrary: "",
          countLikes: 0,
          countDislikes: 0,
          countComments: 0,
          createdAt: "2026-01-04 11:29:24",
          publishedAt: "2026-01-05 05:05:00",
          updatedAt: "2026-01-05 12:06:53",
          introduction:
            "Certes, on l\u2019a compris, cette op\u00e9ration militaire, qui renie les doctrines Monroe et Roosevelt, est destin\u00e9e \u00e0 recr\u00e9dibiliser le dollar, dont le garant est une capacit\u00e9 d\u2019intervention am\u00e9ricaine universelle, et r\u00e9pond \u00e0 des volont\u00e9s expansionnistes de Trump, dont la prochaine cible sera probablement le Groenland. Mais pensons aux cons\u00e9quences :Elle l\u00e9gitime l\u2019occupation d\u2019une partie de l\u2019Ukraine par la Russie et confortera l\u2019annexion de Ta\u00efwan par...",
          url: "venezuela-et-oui-lannee-2026-commence-mal",
          main_media: {
            id: 53070,
            yPos: 0,
            yHeight: 57,
            path: "1a144980ab49de2bc913c8366c1450a3050d4d40.jpeg",
            webPath:
              "storage/uploads/medias/1a144980ab49de2bc913c8366c1450a3050d4d40.jpeg",
            fullMediaUrl:
              "https://s3.tamtam.pro/production/storage/media/IMAGE/53070/1a144980ab49de2bc913c8366c1450a3050d4d40.jpeg",
            fullReducedWebPath:
              "https://s3.tamtam.pro/production/storage/media/IMAGE/53070/REDUCED-1a144980ab49de2bc913c8366c1450a3050d4d40.jpeg",
            fullCroppedWebPath:
              "https://s3.tamtam.pro/production/storage/media/IMAGE/53070/CROPPED-1a144980ab49de2bc913c8366c1450a3050d4d40.jpeg",
          },
          author: [
            {
              firstName: "Emmanuel",
              lastName: "Degr\u00e8ve",
              id: 8650,
              avatar:
                "storage/media/IMAGE/31/AVATAR_a838aa75f6239ff4efb921e6dde7adbc3dd7d3d9.png",
              avatarUrl:
                "https://s3.tamtam.pro/production/storage/media/IMAGE/31/AVATAR_a838aa75f6239ff4efb921e6dde7adbc3dd7d3d9.png",
              url: "emmanuel-degreve",
              creator: { id: 71367, organizations: [] },
              authorDetails: { id: 25 },
              signature: {
                title: "Emmanuel Degr\u00e8ve",
                head: "Pr\u00e9sident de la Fondation Forum For the Future",
              },
              enableAvatar: false,
              priority: 0,
            },
            {
              firstName: "Bruno",
              lastName: "Colmant",
              id: 24534,
              avatar:
                "storage/media/IMAGE/8895/AVATAR_4a357915e27a8d736ea403a65e9650398b5c1bee.png",
              avatarUrl:
                "https://s3.tamtam.pro/production/storage/media/IMAGE/8895/AVATAR_4a357915e27a8d736ea403a65e9650398b5c1bee.png",
              url: "bruno-colmant",
              authorDetails: { id: 129 },
              signature: {
                title: "Bruno Colmant",
                head: "Professeur, Membre de l\u0027Acad\u00e9mie Royale",
              },
              enableAvatar: true,
              priority: 1,
            },
          ],
          type: {
            id: 115,
            nameFr: "Paroles d\u2019expert",
            colorCode: "#007ba7",
          },
          category: {
            colorCode: "#faba09",
            id: 6,
            nameFr: "Politique et \u00e9conomie",
          },
          organization: {
            id: 9,
            name: "Forum for the future",
            abbreviation: "F.F.F.",
            avatarWebPath:
              "storage/media/IMAGE/2174/AVATAR_54cbd68e1ba9284a1e486bd5d8551259cd51d96e.png",
            avatarUrl:
              "https://s3.tamtam.pro/production/storage/media/IMAGE/2174/AVATAR_54cbd68e1ba9284a1e486bd5d8551259cd51d96e.png",
            url: "forum-for-the-future",
            hasFiduciariesAdmin: true,
          },
          social: { isLiked: -1, isFavorite: 0 },
        }}
        size="small"
        isFetching={false}
        env={"production"}
        type="type5"
      /> */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
