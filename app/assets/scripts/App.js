import MobileMenu from './modules/MobileMenu';
import Modal from './modules/Modal';
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import $ from 'jquery';


let mobileMenu = new MobileMenu();
let modal = new Modal();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '60%');

let sticyHeader = new StickyHeader();