import Component from 'flarum/Component';

export default class DashboardPage extends Component {
  view() {
    return (
      <div className="DashboardPage">
        <div className="container">
          <h2>欢迎使用 FlarumOne Beta</h2>
          <p>谢谢你使用 Flarum ！ 你正在运行版本 <strong>{app.forum.attribute('version')}</strong>，这是测试版的程序，不推荐在正式生产环境中使用</p>
          <ul>
            <li>有问题吗？ 阅读  <a href="http://php.szlt.net/flarum/using/troubleshooting.html" target="_blank">故障诊断文档</a></li>
            <li>找到一个Bug？ 请在 <a href="https://github.com/flarumone/flarumone/issues" target="_blank">GitHub</a>上报告</li>
            <li>有建议反馈？ 来 <a href="https://flarumone.com" target="_blank">官方社区</a>让我们知道你的想法吧</li>
            <li>想要贡献？ 阅读<a href="http://php.szlt.net/flarum/preface/contributing.html" target="_blank">贡献文档</a></li>
            <li>想要开发拓展？ 阅读 <a href="http://php.szlt.net/flarum/extend/introduction.html" target="_blank">拓展文档</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
