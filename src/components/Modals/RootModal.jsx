export default function RootModal({ root }) {
  return (
    <>
      <dialog id="root_modal" className="modal text-black">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Root: {root}</h3>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
