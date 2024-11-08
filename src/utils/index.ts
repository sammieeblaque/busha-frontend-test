export const getInitials = (name: string) => {
  if (name) {
    const nameSplit = name?.split(" ");
    const firstInitials = nameSplit[0]?.charAt(0)?.toUpperCase();
    const secondInitials = nameSplit[1]?.charAt(0)?.toUpperCase();

    return (
      (firstInitials ? firstInitials : "") +
      (secondInitials ? secondInitials : "")
    );
  }

  return "O";
};
