import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'test-button',
    styleUrl: '../styles/main.scss',
    shadow: true,
})
export class TestButton {
    @Prop() name: string;

    // function IButton({name = "", isDisabled = false, isHover = false})

    render() {
        // return <button className={isHover ? 'hover' : ''} disabled={isDisabled}>{name}</button>;
        return <button class="buttons">{this.name}</button>;
    }
}   