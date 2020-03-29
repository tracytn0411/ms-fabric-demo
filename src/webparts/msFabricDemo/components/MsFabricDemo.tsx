import * as React from "react";
import styles from "./MsFabricDemo.module.scss";
import { IMsFabricDemoProps } from "./IMsFabricDemoProps";
import { escape } from "@microsoft/sp-lodash-subset";
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActivity,
  IDocumentCardPreviewProps
} from "office-ui-fabric-react/lib/DocumentCard";

export default class MsFabricDemo extends React.Component<
  IMsFabricDemoProps,
  {}
> {
  public render(): JSX.Element {
    const previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          previewImageSrc: String(require("./document-preview.png")),
          iconSrc: String(require("./icon-ppt.png")),
          width: 318,
          height: 196,
          accentColor: "#ce4b1f"
        }
      ]
    };

    return (
      <DocumentCard onClickHref="http://bing.com">
        <DocumentCardPreview {...previewProps} />
        <DocumentCardTitle title="Revenue stream proposal fiscal year 2016 version02.pptx" />
        <DocumentCardActivity
          activity="Created Feb 23, 2016"
          people={[
            {
              name: "Kat Larrson",
              profileImageSrc: String(require("./avatar-kat.png"))
            }
          ]}
        />
      </DocumentCard>
    );
  }
}
// export default class MsFabricDemo extends React.Component<IMsFabricDemoProps, {}> {
//   public render(): React.ReactElement<IMsFabricDemoProps> {
//     return (
//       <div className={ styles.msFabricDemo }>
//         <div className={ styles.container }>
//           <div className={ styles.row }>
//             <div className={ styles.column }>
//               <span className={ styles.title }>Welcome to SharePoint!</span>
//               <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
//               <p className={ styles.description }>{escape(this.props.description)}</p>
//               <a href="https://aka.ms/spfx" className={ styles.button }>
//                 <span className={ styles.label }>Learn more</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
