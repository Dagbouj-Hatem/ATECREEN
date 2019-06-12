{* 
* @Module Name: AP Page Builder
* @Website: apollotheme.com - prestashop template provider
* @author Apollotheme <apollotheme@gmail.com>
* @copyright Apollotheme
* @description: ApPageBuilder is module help you can build content for your shop
*}
<ul id="header_user_info" class="hidden-lg-down float-xl-right">
  {if $logged}
      <li>
        <a class="account" href="{$my_account_url}" title="{l s='View my customer account' d='Shop.Theme.Customeraccount'}" rel="nofollow">
          <span>{l s='Hello' d='Shop.Theme.Global'} {$customerName}</span>
        </a>
      </li>
      <li>
        <a class="logout dropdown-item" href="{$logout_url}" rel="nofollow">
          {l s='Sign out' d='Shop.Theme.Actions'}
        </a>
      </li>
      <li>
        <a class="myacount dropdown-item" href="{$my_account_url}" title="{l s='My account' d='Shop.Theme.Global'}" rel="nofollow">
          <span>{l s='My account' d='Shop.Theme.Global'}</span>
        </a>
      </li>
    {else}
      <li>
        <a href="{$urls.pages.register}" rel="nofollow" title="{l s='Create an account' d='Shop.Theme.Actions'}">
          {l s='Register' d='Shop.Theme.Actions'}
        </a>
        <a class="signin" href="{$my_account_url}" title="{l s='Log in to your customer account' d='Shop.Theme.Customeraccount'}" rel="nofollow" >
          {l s='Login' d='Shop.Theme.Actions'}
        </a>
        
      </li>
    {/if}
</ul>

<div class="userinfo-selector popup-over e-scale hidden-xl-up">
  <a href="javascript:void(0)" data-toggle="dropdown" class="popup-title" title="{l s='Account' d='Shop.Theme.Global'}">
    <i class="material-icons">&#xE55A;</i>
    <span>{l s='Account' d='Shop.Theme.Global'}</span>
    <i class="material-icons">&#xE5C5;</i>
 </a>
  <ul class="popup-content dropdown-menu user-info">
    {if $logged}
      <li>
        <a
          class="account dropdown-item" 
          href="{$my_account_url}"
          title="{l s='View my customer account' d='Shop.Theme.Customeraccount'}"
          rel="nofollow"
        >
          <i class="material-icons">&#xE853;</i>
          <span>{l s='Hello' d='Shop.Theme.Global'} {$customerName}</span>
        </a>
      </li>
      <li>
        <a
          class="logout dropdown-item"
          href="{$logout_url}"
          rel="nofollow"
        >
          <i class="material-icons">&#xE853;</i>
          {l s='Sign out' d='Shop.Theme.Actions'}
        </a>
      </li>
    {else}
      <li>
        <a
          class="signin dropdown-item"
          href="{$my_account_url}"
          title="{l s='Log in to your customer account' d='Shop.Theme.Customeraccount'}"
          rel="nofollow"
        >
          <i class="material-icons">&#xE88D;</i>
          <span>{l s='Sign in' d='Shop.Theme.Actions'}</span>
        </a>
      </li>
    {/if}
    <li>
      <a
        class="myacount dropdown-item"
        href="{$my_account_url}"
        title="{l s='My account' d='Shop.Theme.Global'}"
        rel="nofollow"
      >
        <i class="material-icons">&#xE8A6;</i>
        <span>{l s='My account' d='Shop.Theme.Global'}</span>
      </a>
    </li>
    <li>
      <a
        class="ap-btn-wishlist dropdown-item"
        href="{url entity='module' name='leofeature' controller='mywishlist'}"
        title="{l s='Wishlist' d='Shop.Theme.Global'}"
        rel="nofollow"
      >
        <i class="material-icons">&#xE87D;</i>
        <span>{l s='Wishlist' d='Shop.Theme.Global'}</span>
		<span class="ap-total-wishlist ap-total"></span>
      </a>
    </li>
	<li>
      <a
        class="ap-btn-compare dropdown-item"
        href="{url entity='module' name='leofeature' controller='productscompare'}"
        title="{l s='Compare' d='Shop.Theme.Global'}"
        rel="nofollow"
      >
        <i class="material-icons">&#xE863;</i>
        <span>{l s='Compare' d='Shop.Theme.Global'}</span>
		<span class="ap-total-compare ap-total"></span>
      </a>
    </li>
    <li>
      <a
        class="checkout dropdown-item"
        href="{url entity='cart' params=['action' => show]}"
        title="{l s='Checkout' d='Shop.Theme.Global'}"
        rel="nofollow"
      >
        <i class="material-icons">&#xE890;</i>
        <span>{l s='Checkout' d='Shop.Theme.Actions'}</span>
      </a>
    </li>
  </ul>
</div>