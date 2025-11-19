function Modal({ handleShowModal }) {
    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
            {/* Background overlay */}
            <div 
                className="fixed inset-0 bg-black/50"
                onClick={handleShowModal}
            ></div>

            {/* Modal Box */}
            <div className="bg-white p-0 md:p-6 z-50 w-11/12 max-w-[50%] rounded-lg">
                <div className="relative w-full pb-[56.25%]">
                    <iframe
                        title="modalVideo"
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/3h0_v1cdUIA"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Modal;
