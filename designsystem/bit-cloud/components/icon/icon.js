/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Adapt } from "@designsystem-scope/utils/Icons/SystemIcons/Adapt/Adapt"
import { Close } from "@designsystem-scope/utils/Icons/SystemIcons/Close/Close";
import { Easytoread } from "@designsystem-scope/utils/Icons/SystemIcons/Easytoread/Easytoread";
import { Search } from "@designsystem-scope/utils/Icons/SystemIcons/Search/Search";
import { Signlanguage } from "@designsystem-scope/utils/Icons/SystemIcons/Signlanguage/Signlanguage";
import { Volume } from "@designsystem-scope/utils/Icons/SystemIcons/Volume/Volume";
import { Otherlang } from "@designsystem-scope/utils/Icons/SystemIcons/Otherlang/Otherlang";
import { Ecc } from "@designsystem-scope/utils/Icons/SystemIcons/Ecc/Ecc";
import { Arrow } from "@designsystem-scope/utils/Icons/SystemIcons/Arrow/Arrow";
import { Burger } from "@designsystem-scope/utils/Icons/SystemIcons/Burger/Burger";
import { External } from "@designsystem-scope/utils/Icons/SystemIcons/External/External";
import { Exclamationmark } from "@designsystem-scope/utils/Icons/SystemIcons/Exclamationmark/Exclamationmark";
import { Check } from "@designsystem-scope/utils/Icons/SystemIcons/Check/Check";
import { Oval } from "@designsystem-scope/utils/Icons/SystemIcons/Oval/Oval";
import { LinkArrow } from "@designsystem-scope/utils/Icons/SystemIcons/LinkArrow/LinkArrow";
import { Filter } from "@designsystem-scope/utils/Icons/SystemIcons/Filter/Filter";
import { List } from "@designsystem-scope/utils/Icons/SystemIcons/List/List";
import { Picturelist } from "@designsystem-scope/utils/Icons/SystemIcons/Picturelist/Picturelist";
import { Clear } from "@designsystem-scope/utils/Icons/SystemIcons/Clear/Clear";
import { Camera } from "@designsystem-scope/utils/Icons/SystemIcons/Camera/Camera";
import { Play } from "@designsystem-scope/utils/Icons/SystemIcons/Play/Play";
import { FileExcel } from "@designsystem-scope/utils/Icons/SystemIcons/FileExcel/FileExcel";
import { FilePdf } from "@designsystem-scope/utils/Icons/SystemIcons/FilePdf/FilePdf";
import { FilePowerpoint } from "@designsystem-scope/utils/Icons/SystemIcons/FilePowerpoint/FilePowerpoint";
import { FileWord } from "@designsystem-scope/utils/Icons/SystemIcons/FileWord/FileWord";
import { File } from "@designsystem-scope/utils/Icons/SystemIcons/File/File";
import { Warn } from "@designsystem-scope/utils/Icons/SystemIcons/Warn/Warn";
import { Question } from "@designsystem-scope/utils/Icons/SystemIcons/Question/Question";
import { AirTime } from "@designsystem-scope/utils/Icons/SystemIcons/AirTime/AirTime";
import { AtBranch } from "@designsystem-scope/utils/Icons/SystemIcons/AtBranch/AtBranch";
import { BankAccount } from "@designsystem-scope/utils/Icons/SystemIcons/BankAccount/BankAccount";
import { CallCenter } from "@designsystem-scope/utils/Icons/SystemIcons/CallCenter/CallCenter";
import { HomeDelivery } from "@designsystem-scope/utils/Icons/SystemIcons/HomeDelivery/HomeDelivery";
import { Online } from "@designsystem-scope/utils/Icons/SystemIcons/Online/Online";
import { Send } from "@designsystem-scope/utils/Icons/SystemIcons/Send/Send";

const iconDefinitions = {
  Adapt,
  Close,
  Easytoread,
  External,
  Search,
  Signlanguage,
  Volume,
  Otherlang,
  Arrow,
  Ecc,
  Burger,
  Exclamationmark,
  Check,
  Oval,
  LinkArrow,
  Filter,
  List,
  Picturelist,
  Clear,
  Camera,
  Play,
  FileExcel,
  FilePdf,
  FilePowerpoint,
  FileWord,
  File,
  Warn,
  Question,
  AirTime,
  AtBranch,
  BankAccount,
  CallCenter,
  HomeDelivery,
  Online,
  Send
};

const Icon = ({ icon, className, style, title, ...otherAttr }) => {
  const Element = iconDefinitions[icon];

  if (Element === undefined) {
    return null;
  }

  return (
    <Element
      focusable="false"
      title={title || icon || ""}
      className={className}
      style={style}
      role="img"
      aria-label={title || icon || ""}
      {...otherAttr}
    />
  );
};

export { Icon, iconDefinitions };
