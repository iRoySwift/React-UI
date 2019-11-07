##

<p align="center">
    <a href="https://github.com/realRoyHsu/rui/tree/master/packages/scrollbar" style="font-size:25px">React Overlay Scrollbars</a>
</p>

<hr>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/react-16.8.6-blue.svg" />
  <a href="https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://twitter.com/realRoyHsu">
    <img alt="Twitter: realRoyHsu" src="https://img.shields.io/twitter/follow/realRoyHsu.svg?style=social" target="_blank" />
  </a>
</p>

> This project is based on the overlayscrollbar project and is developed.


## Demo

```js
import ScrollBar from 'react-overlayscrollbars';
import 'react-overlayscrollbars/es/index.css';

<ScrollBar className="roy_scroll os-theme-dark"
        id="roy_id"
        style={{background:'red'}}
        overflow-behavior={{ x: 'hidden' }}
        scrollbars={{ autoHide: 'l' }} >
    // ....
</ScrollBar>

.roy_scroll{
    height: calc(100% - 0px);
    transition: width 0.3s ease-in-out 0s;
}
```

## Download

#### npm

```
npm i -S react-overlayscrollbars
```

## Options

[Please read the much more detailed documentation](https://kingsora.github.io/OverlayScrollbars/#!documentation).


<table>
	<thead>
		<tr>
			<th align="left" colspan="2">option</th>
			<th align="left">type</th>
			<th align="left">default</th>
			<th align="left">description</th>
		</tr>
	</thead>
	<tr>
		<td colspan="2">className</td>
		<td>string / null</td>
		<td><code>"os-theme-dark"</code></td>
		<td>The class name which shall be added to the host element.</td>
	</tr>
	<tr>
		<td colspan="2">resize</td>
		<td>string</td>
		<td><code>"none"</code></td>
		<td>The resize behavior of the host element. This option works exactly like the CSS3 resize property.</td>
	</tr>
	<tr>
		<td colspan="2">sizeAutoCapable</td>
		<td>boolean</td>
		<td><code>true</code></td>
		<td>Indicates whether the host element is capable of "auto" sizes such as: <code>width: auto</code> and <code>height: auto</code>.</td>
	</tr>
	<tr>
		<td colspan="2">clipAlways</td>
		<td>boolean</td>
		<td><code>true</code></td>
		<td>Indicates whether the content shall be clipped always.</td>
	</tr>
	<tr>
		<td colspan="2">normalizeRTL</td>
		<td>boolean</td>
		<td><code>true</code></td>
		<td>Indicates whether RTL scrolling shall be normalized.</td>
	</tr>
	<tr>
		<td colspan="2">paddingAbsolute</td>
		<td>boolean</td>
		<td><code>false</code></td>
		<td>Indicates whether the padding for the content shall be absolute.</td>
	</tr>
	<tr>
		<td colspan="2">autoUpdate</td>
		<td>boolean / null</td>
		<td><code>null</code></td>
		<td>Indicates whether the plugin instance shall be updated continuously within a update loop.</td>
	</tr>
	<tr>
		<td colspan="2">autoUpdateInterval</td>
		<td>number</td>
		<td><code>33</code></td>
		<td>The interval in milliseconds in which a auto update shall be performed for this instance.</td>
	</tr>
	<tr>
		<th align="left" colspan="5">nativeScrollbarsOverlaid : {</th>
	</tr>
	<tr>
		<td></td>
		<td>showNativeScrollbars</td>
		<td>boolean</td>
		<td><code>false</code></td>
		<td>Indicates whether the native overlaid scrollbars shall be visible.</td>
	</tr>
	<tr>
		<td></td>
		<td>initialize</td>
		<td>boolean</td>
		<td><code>true</code></td>
		<td>
			Indicates whether the plugin shall be initialized even if the native scrollbars are overlaid.<br>
			If you initialize the plugin on the body element, I recommend to set this option to false.
		</td>
	</tr>
	<tr>
		<th align="left" colspan="5">}</th>
	</tr>
	<tr>
		<th align="left" colspan="5">overflowBehavior : {</th>
	</tr>
	<tr>
		<td></td>
		<td>x</td>
		<td>string</td>
		<td><code>"scroll"</code></td>
		<td>The overflow behavior for the x (horizontal) axis.</td>
	</tr>
	<tr>
		<td></td>
		<td>y</td>
		<td>string</td>
		<td><code>"scroll"</code></td>
		<td>The overflow behavior for the y (vertical) axis.</td>
	</tr>
	<tr>
		<th align="left" colspan="5">}</th>
	</tr>
	<tr>
		<th align="left" colspan="5">scrollbars : {</th>
	</tr>
	<tr>
		<td></td>
		<td>visibility</td>
		<td>string</td>
		<td><code>"auto"</code></td>
		<td>The basic visibility of the scrollbars.</td>
	</tr>
	<tr>
		<td></td>
		<td>autoHide</td>
		<td>string</td>
		<td><code>"never"</code></td>
		<td>The possibility to hide visible scrollbars automatically after a certain action.</td>
	</tr>
	<tr>
		<td></td>
		<td>autoHideDelay</td>
		<td>number</td>
		<td><code>800</code></td>
		<td>The delay in milliseconds before the scrollbars gets hidden automatically.</td>
	</tr>
	<tr>
		<td></td>
		<td>dragScrolling</td>
		<td>boolean</td>
		<td><code>true</code></td>
		<td>Defines whether the scrollbar-handle supports drag scrolling.</td>
	</tr>
	<tr>
		<td></td>
		<td>clickScrolling</td>
		<td>boolean</td>
		<td><code>false</code></td>
		<td>Defines whether the scrollbar-track supports click scrolling.</td>
	</tr>
	<tr>
		<td></td>
		<td>touchSupport</td>
		<td>boolean</td>
		<td><code>true</code></td>
		<td>Indicates whether the scrollbar reacts to touch events.</td>
	</tr>
	<tr>
		<td></td>
		<td>snapHandle</td>
		<td>boolean</td>
		<td><code>false</code></td>
		<td>Indicates whether the scrollbar handle-offset shall be snapped.</td>
	</tr>
	<tr>
		<th align="left" colspan="5">}</th>
	</tr>
	<tr>
		<th align="left" colspan="5">textarea : {</th>
	</tr>
	<tr>
		<td></td>
		<td>dynWidth</td>
		<td>boolean</td>
		<td><code>false</code></td>
		<td>Indiactes whether the textarea width will be dynamic (content dependent).</td>
	</tr>
	<tr>
		<td></td>
		<td>dynHeight</td>
		<td>boolean</td>
		<td><code>false</code></td>
		<td>Indiactes whether the textarea height will be dynamic (content dependent).</td>
	</tr>
	<tr>
		<td></td>
		<td>inheritedAttrs</td>
		<td>string / array / null</td>
		<td><code>["style", "class"]</code></td>
		<td><b>During initialization:</b> Attributes which the generated host-element shall inherit from from the target textarea-element.<br/>
<b>During destruction:</b> Attributes which the target textarea-element shall inherit from from the generated host-element.</td>
	</tr>
	<tr>
		<th align="left" colspan="5">}</th>
	</tr>
	<tr>
		<th align="left" colspan="5">callbacks : {</th>
	</tr>
	<tr>
		<td></td>
		<td>onInitialized</td>
		<td>function / null</td>
		<td><code>null</code></td>
		<td>Gets fired after the plugin was initialized. It takes no arguments.</td>
	</tr>
	<tr>
		<td></td>
		<td>onInitializationWithdrawn</td>
		<td>function / null</td>
		<td><code>null</code></td>
		<td>Gets fired after the initialization of the plugin was aborted due to the option <code>nativeScrollbarsOverlaid : { initialize : false }</code>. It takes no arguments.</td>
	</tr>
	<tr>
		<td></td>
		<td>onDestroyed</td>
		<td>function / null</td>
		<td><code>null</code></td>
		<td>Gets fired after the plugin was destryoed. It takes no arguments.</td>
	</tr>
	<tr>
		<td></td>
		<td>onScrollStart</td>
		<td>function / null</td>
		<td><code>null</code></td>
		<td>Gets fired after the user starts scrolling. It takes one argument.</td>
	</tr>
	<tr>
		<td></td>
		<td>onScroll</td>
		<td>function / null</td>
		<td><code>null</code></td>
		<td>Gets fired after every scroll. It takes one argument.</td>
	</tr>
	<tr>
		<td></td>
		<td>onScrollStop</td>
		<td>function / null</td>
		<td><code>null</code></td>
		<td>Gets fired after the user stops scrolling. It takes one argument.</td>
	</tr>
	<tr>
		<td></td>
		<td>onOverflowChanged</td>
		<td>function / null</td>
		<td><code>null</code></td>
		<td>Gets fired after the overflow has changed. It takes one argument.</td>
	</tr>
	<tr>
		<td></td>
		<td>onOverflowAmountChanged</td>
		<td>function / null</td>
		<td><code>null</code></td>
		<td>Gets fired after the overflow amount has changed. It takes one argument.</td>
	</tr>
	<tr>
		<td></td>
		<td>onDirectionChanged</td>
		<td>function / null</td>
		<td><code>null</code></td>
		<td>Gets fired after the direction has changed. It takes one argument.</td>
	</tr>
	<tr>
		<td></td>
		<td>onContentSizeChanged</td>
		<td>function / null</td>
		<td><code>null</code></td>
		<td>Gets fired after the content size has changed. It takes one argument.</td>
	</tr>
	<tr>
		<td></td>
		<td>onHostSizeChanged</td>
		<td>function / null</td>
		<td><code>null</code></td>
		<td>Gets fired after the host size or host padding has changed. It takes one argument.</td>
	</tr>
	<tr>
		<td></td>
		<td>onUpdated</td>
		<td>function / null</td>
		<td><code>null</code></td>
		<td>Gets fired after the host size has changed. It takes one argument.</td>
	</tr>
	<tr>
		<th align="left" colspan="5">}</th>
	</tr>
</table>

## License

MIT
