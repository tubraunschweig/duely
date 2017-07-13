import { browser, element, by, ElementFinder, Key } from 'protractor';

export class WebPage {

  /**
   * navigates to the specified route
   * @return A promise firing once the route has been changed
   */
  public navigateTo(url: string) {
    return browser.get(url);
  }

  /**
   * retrieves the rac-* tag in order to determine the component
   * @return A promise firing once the component's tag name is determined
   */
  public getComponentTag() {
    return element(by.css('main > *:nth-child(2)')).getTagName();
  }

}
