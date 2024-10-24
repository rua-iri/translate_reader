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
    console.log(rootData);
  }, [root]);

  return (
    <>
      <dialog id="root_modal" className="modal text-black">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Root:
            <span className="badge badge-lg badge-neutral mx-2 p-3">
              {root}
            </span>
          </h3>
          <div className="divider"></div>
          <RootDescription desc={rootData.desc} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

function RootDescription({ desc }) {
  if (!desc) {
    return (
    <div>
      No Description Found
    </div>
    );
  }

  return <div className="my-4">{desc}</div>;
}
