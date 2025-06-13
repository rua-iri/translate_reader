import { useEffect, useState } from "react";
import { fetchRootMeanings } from "../../../utils/fetcher";

export default function RootModal({ root }) {
  const [rootData, setRootData] = useState({});

  async function getRootMeaning() {
    if (root) {
      setRootData(await fetchRootMeanings(root));
    }
  }

  useEffect(() => {
    getRootMeaning();
  }, [root]);

  return (
    <dialog id="root_modal" className="modal text-black">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Root:
          <span className="badge badge-lg badge-neutral mx-2 p-3">{root}</span>
        </h3>
        <div className="divider"></div>
        <RootDescription rootMeanings={rootData} />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

function RootDescription({ rootMeanings }) {
  console.log(JSON.stringify(rootMeanings));
  console.log(typeof rootMeanings);

  if (!rootMeanings || Object.keys(rootMeanings).length === 0) {
    return <div>No Description Found</div>;
  }

  const rootMeaningElements = rootMeanings.map((rootMeaning, index) => (
    <div
      className="collapse collapse-plus bg-base-100 border border-base-300"
      dir="ltr"
    >
      <input type="radio" name="root-accordion" defaultChecked={index === 0} />
      <div className="collapse-title font-semibold" dir="ltr">
        {rootMeaning.word}
      </div>
      <span
        className="collapse-content"
        dir="ltr"
        dangerouslySetInnerHTML={{ __html: rootMeaning.meaning }}
      />
    </div>
  ));

  return <div className="my-4">{rootMeaningElements}</div>;
}
