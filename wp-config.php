<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'atecreen' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`EqL}2pHhdT&tZscaH+]|18> SxrGbRtqLCt8^g7gKS:hY=zYPVt=OFarmE=:OH_' );
define( 'SECURE_AUTH_KEY',  'V4iT9_b|;@+Oz:R1ur>pK8VrWbsu?b:xBk6ItU%s5~(cT>*ODP(uB4z(9fAVb ;`' );
define( 'LOGGED_IN_KEY',    '9(!5{KWObUu(DKpL*6^C)ZS~dc9j!hRqrmya^:C;!O=1A=c5~]2b]aCqNVo1B}{:' );
define( 'NONCE_KEY',        'IydFDa&_:!0gj+RIk7(ug8e{99QLFbr3q/bT<K0)6D&l!F^OB:fQpP%+]V4uvedT' );
define( 'AUTH_SALT',        'd<9+Nv:#;whPO?zw4O.++j{a{tL<&eRp ,ab@uc6+GlZKMlvbrCxFNuMp:CZg5SO' );
define( 'SECURE_AUTH_SALT', '<95lX#I]3#}IN.=>+/&yoHcAYRH6(fufId@`HeamWR7<G0;-^{;N1MDxx-}%QG+d' );
define( 'LOGGED_IN_SALT',   'e0TKWI`IpnuD_A<!nUPrN`.H^E3V6)o2.cNSd*R5Y %96FVy]xj=d{)|X^4Sck8-' );
define( 'NONCE_SALT',       '*v4~l;I]W/R-S6$v` 7g|oOZymm%(2OlU#UJ,}B$]+lbIB|86Aug cTjDX*t8rG@' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
