export const sdgsDisplayGenerator = (sdgsObj) => {
  const sdgsGoals = Object.entries(sdgsObj).map(([key, value]) => ({
    name: key,
    display: value,
  }));
  return sdgsGoals;
};

export const sdgsIconSwitch = (name) => {
  switch (name) {
    case "goal01":
      return "/images/icon/sdg_icon_01_ja.png";
    case "goal02":
      return "/images/icon/sdg_icon_02_ja.png";
    case "goal03":
      return "/images/icon/sdg_icon_03_ja.png";
    case "goal04":
      return "/images/icon/sdg_icon_04_ja.png";
    case "goal05":
      return "/images/icon/sdg_icon_05_ja.png";
    case "goal06":
      return "/images/icon/sdg_icon_06_ja.png";
    case "goal07":
      return "/images/icon/sdg_icon_07_ja.png";
    case "goal08":
      return "/images/icon/sdg_icon_08_ja.png";
    case "goal09":
      return "/images/icon/sdg_icon_09_ja.png";
    case "goal10":
      return "/images/icon/sdg_icon_10_ja.png";
    case "goal11":
      return "/images/icon/sdg_icon_11_ja.png";
    case "goal12":
      return "/images/icon/sdg_icon_12_ja.png";
    case "goal13":
      return "/images/icon/sdg_icon_13_ja.png";
    case "goal14":
      return "/images/icon/sdg_icon_14_ja.png";
    case "goal15":
      return "/images/icon/sdg_icon_15_ja.png";
    case "goal16":
      return "/images/icon/sdg_icon_16_ja.png";
    case "goal17":
      return "/images/icon/sdg_icon_17_ja.png";
    default:
      return "";
  }
};
