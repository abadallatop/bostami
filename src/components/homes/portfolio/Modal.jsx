"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { staticText } from "@/data/staticText";

export default function Modal({ setShowModal, showModal, modalContent, lang }) {
  useEffect(() => {
    const handleDocumentClick = (event) => {
      const modalDialog = document.querySelector(".modal");
      const modalContent = document.querySelector(".modal-content");

      // Check if the click is outside of modal-content but inside modal-dialog
      if (
        modalDialog &&
        modalContent &&
        !modalContent.contains(event.target) &&
        modalDialog.contains(event.target)
      ) {
        // Your logic for handling the click outside modal-content
        setShowModal(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleDocumentClick);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <>
      <div
        className={`modal portfolio-modal-box fade ${showModal ? "show" : ""} `}
        id="portfolio-1"
        tabIndex="-1"
        role="dialog"
        style={{
          transition: "0.4s",
          display: `block`,
          visibility: `${showModal ? "visible" : "hidden"}`,
        }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <h6 className="blog-title">
                {modalContent?.[lang]?.title || modalContent?.en?.title}
              </h6>

              <div className="portfolio-modal-table">
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-regular fa-file-lines"></i>
                      {staticText.portfolio.project[lang]}{" "}
                      <span>
                        {modalContent?.[lang]?.project ||
                          modalContent?.en.project}
                      </span>
                    </h3>
                  </div>
                  <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-regular fa-user "></i>
                      {staticText.portfolio.client[lang]}{" "}
                      <span>{modalContent?.client}</span>
                    </h3>
                  </div>
                  <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-solid fa-code"></i>
                      {staticText.portfolio.langages[lang]}{" "}
                      <span>{modalContent?.languages.join(", ")}</span>
                    </h3>
                  </div>
                  <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      {staticText.portfolio.preview[lang]}{" "}
                      <a href={modalContent?.previewLink}>
                        {modalContent?.previewName}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="h1-modal-paragraph">
                {modalContent?.[lang]?.desc?.map((html, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
                ))}
              </div>
              <div className="h1-modal-img">
                {modalContent?.imgSrc && (
                  <Image
                    width={800}
                    height={800}
                    style={{
                      width: "100%",
                      height: "fit-content",
                      maxHeight: "450px",
                      objectFit: "cover",
                    }}
                    src={modalContent?.imgSrc}
                    alt="portfolio"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            onClick={() => setShowModal(false)}>
            <i className="far fa-times"></i>
          </button>
        </div>
      )}
    </>
  );
}
