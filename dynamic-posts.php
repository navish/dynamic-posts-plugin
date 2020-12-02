<?php
/**
 * Plugin Name:     Dynamic Posts
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     dynamic-posts
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_dynamic_posts_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/dynamic-posts" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-dynamic-posts-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'create-block-dynamic-posts-block-editor', 'dynamic-posts' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-dynamic-posts-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-dynamic-posts-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'create-block/dynamic-posts', array(
		'editor_script' => 'create-block-dynamic-posts-block-editor',
		'editor_style'  => 'create-block-dynamic-posts-block-editor',
		'style'         => 'create-block-dynamic-posts-block',
		'render_callback' => 'render_dynamic_posts',
	) );
}

function render_dynamic_posts($attributes) {
	$posts = get_posts(
		[
		'post_type' => $attributes['selectedPostType'],
		'category' => $attributes['selectedCategory'], 
		'posts_per_page' => $attributes['postsPerPage']
		]
	);
if($posts){ ?>
	<div class="w3-responsive w3-margin-bottom">
	<table class="w3-table-all w3-striped w3-bordered w3-hoverable">
		<tr class="w3-text-white bluish-background">
			<th>Project ID</th>
			<th>Project Name</th>
			<th>Contracting Authority</th>
			<th>Location</th>
			<th>Investment(million TZS)</th>
			<th>Market Sounding End Date</th>
		</tr>
	<?php 
	foreach($posts as $post){ ?>
		<tr>
		<td><?php
			$project_id =  $post->project_id_number;
			echo $project_id; ?>
		</td>
		<td><a href=<?php echo get_permalink(); ?>><?php echo $post->post_title; ?></a></td>
		<td><?php
			$project_ca = $post->contracting_authority;
			echo $project_ca; ?></td>
		<td> <?php
				$location =  $post->location;
				echo $location; ?>
		</td>
		<td><?php
			$investment =  $post->investment;
			echo $investment; ?>
		</td>
		<td><?php
			$sounding_end_date =  $post->sounding_end_date;
			echo $sounding_end_date; ?>
		</td>
	</tr>
	<?php } ?>
	</table>
	<?php } else 
	echo '<p>'._e('Sorry, no projects where found').'</p>'; 

return ob_get_clean();

}

add_action( 'init', 'create_block_dynamic_posts_block_init' );
