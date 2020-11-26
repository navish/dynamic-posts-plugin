/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	if (!attributes.categories) {
		apiFetch({
			url: './../wp-json/wp/v2/categories',
		}).then(categories => {
			setAttributes({
				categories : categories,
			});
		});
	}
	if (!attributes.postTypes) {
		apiFetch({
			url: './../wp-json/wp/v2/types',
		}).then(postTypes => {
			setAttributes({
				postTypes : postTypes,
			});
		});
	}
	/** If attributes have not been set yet, execute this */
	if (!attributes.categories) {
		return 'Loading...';
	}
	/** If all categories have been deleted, don't blow up the site, run this code snippet */
	if (!attributes.categories && attributes.categories.length === 0) {
		return 'No categories found';
	}
	
	function updateCategory(event) {
		setAttributes({
			selectedCategory: event.target.value,
		});
	}
	function updatePostType(event) {
		setAttributes({
			selectedPostType: event.target.value,
		});
	}

	function updatePostsPerPage(event) {
		setAttributes({
			postsPerPage: event.target.value,
		});
	}
	console.log(attributes.postTypes);
	return (
		<div>
			<label> Post Type </label>
			<select onChange={updatePostType} value={attributes.selectedPostType}>
				{
					Object.values(attributes.postTypes).map(postType => {
						return (
							<option value={postType.id} key={postType.id}>{postType.name}</option>
						);
					})
				}
			</select>
			<label> Project Category </label>
			<select onChange={updateCategory} value={attributes.selectedCategory}>
				{
					attributes.categories.map(category => {
						return (
							<option value={category.id} key={category.id}>{category.name}</option>
						);
					})
				}
			</select>
			<label> Posts per Page: </label>
			<input type="text" onBlur = {updatePostsPerPage} value={attributes.postsPerPage} />
		</div>
	)
}
