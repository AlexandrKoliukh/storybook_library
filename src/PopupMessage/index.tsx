import * as React from 'react';

export interface IPropsForPopupMessageComponent {
  title?: string;
  type?: 'info' | 'danger' | 'success';
}

class PopupMessageComponent extends React.Component<
  IPropsForPopupMessageComponent
> {
  static defaultProps = {
    type: 'primary',
  };
  public render() {
    return (
      <div className={`alert alert-${this.props.type}`} role="alert">
        <h4 className="alert-heading al">{this.props.title}</h4>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default PopupMessageComponent;
