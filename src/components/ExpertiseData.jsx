export default function ExpertiseData({ title, styleWidth, ariaValue, icon }) {
  return (
    <div className={`pb-2 col-12 col-md-6 col-lg-4`}>
      <div className={`p-2 card`}>
        <div className={`row d-flex align-items-center`}>
          <div
            className={`col-2 col-md-3`}
          >
            <img src={icon} alt="icon" className={`img-fluid rounded-2`} />
          </div>
          <div className={`col-10 col-md-9`}>
            <div className={`mb-2 fs-6 fs-md-5`}>{title}</div>
            <div className={`progress`}>
              <div
                className={`progress-bar`}
                role={`progressbar`}
                style={{ width: `${styleWidth}` }}
                aria-valuenow={ariaValue}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                {styleWidth}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
