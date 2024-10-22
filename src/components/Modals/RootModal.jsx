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
          <h3 className="font-bold text-lg">Root: {root}</h3>
          <div>{rootData.desc}</div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
