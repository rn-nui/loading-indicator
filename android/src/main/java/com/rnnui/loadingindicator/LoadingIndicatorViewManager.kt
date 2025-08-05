package com.rnnui.loadingindicator

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.viewmanagers.LoadingIndicatorViewManagerInterface
import com.facebook.react.viewmanagers.LoadingIndicatorViewManagerDelegate
import com.google.android.material.loadingindicator.LoadingIndicator

@ReactModule(name = LoadingIndicatorViewManager.NAME)
class LoadingIndicatorViewManager : SimpleViewManager<LoadingIndicator>(),
  LoadingIndicatorViewManagerInterface<LoadingIndicator> {
  private val mDelegate: ViewManagerDelegate<LoadingIndicator> = LoadingIndicatorViewManagerDelegate(this)

  override fun getDelegate(): ViewManagerDelegate<LoadingIndicator> {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): LoadingIndicator {
    return LoadingIndicator(context)
  }

  companion object {
    const val NAME = "LoadingIndicatorView"
  }

  override fun setColor(view: LoadingIndicator?, value: Int?) {
    if (value == null || view == null) return
    view.setIndicatorColor(value)
  }

  override fun setContainerColor(view: LoadingIndicator?, value: Int?) {
    if (view == null) return

    if (value == null) view.containerColor = Color.TRANSPARENT
    else view.containerColor = value
  }

  override fun setSize(view: LoadingIndicator?, value: Int) {
    if (view == null) return
    view.indicatorSize = value
  }

  override fun setContainerSize(view: LoadingIndicator?, value: Int) {
    if (view == null) return
    view.containerHeight = value
    view.containerWidth = value
  }
}
