import { useRef } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export default function InfoModal() {
  const modalRef = useRef();

  return (
    <>
      <div className="absolute bottom-0 m-3">
        <button
          className="btn glass btn-sm"
          onClick={() => modalRef.current.showModal()}
        >
          <InformationCircleIcon className="h-full" />
        </button>
      </div>

      <dialog id="my_modal_2" className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Info</h3>
          <p>
            Welcome to the Arabic Reading Assistant. A tool to help intermediate
            and advanced Arabic students read and understand texts with greater
            ease.
          </p>

          <p>
            It was built by me, Rory McGuigan, and was inspired by the kind of
            tool I always wished I had while studying at university.
          </p>

          <p>
            The full source code can be found in my&nbsp;
            <a
              className="link"
              href="https://github.com/rua-iri/translate_reader"
              target="_blank"
            >
              GitHub repository.
            </a>
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
