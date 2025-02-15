 export const maskCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  };

 export const maskExpiry = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{2})/, "$1/$2")
      .substring(0, 7);
  };

export  const maskCVV = (value: string) => {
    return value.replace(/\D/g, "").substring(0, 4);
  };
