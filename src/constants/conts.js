export const defaultModelPopup = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      zIndex: 9
      // transition:  'opacity 250ms',
      // opacity:  1,
    },
    content: {
      position: "fixed",
      top: "60%",
      bottom: "auto",
      left: "50%",
      right: "auto",
      transform: "translate(-50%,-50%)",
      borderRadius: "8px",
      border: "0",
      padding: "0",
      minWidth: "450px",
      width: "auto",
      maxWidth: "100%"
    }
  };